import Tour from '../../../models/Tour'; // Mongoose model for Tour
import connectDB from '../../../utils/connectDB'; // Database connection
import { verifyAdmin } from '../../../utils/auth'; // JWT admin verification

connectDB(); // Ensure database is connected

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await handleGetTours(req, res);
      break;
    case 'POST':
      await handleCreateTour(req, res);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}

// Handle GET request to fetch all tours
const handleGetTours = async (req, res) => {
  try {
    const tours = await Tour.find().populate('destinations hotels');
    res.status(200).json(tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Handle POST request to create a new tour (admin only)
const handleCreateTour = async (req, res) => {
  try {
    // Verify if the user is an admin
    const admin = await verifyAdmin(req);
    if (!admin) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const { name, description, duration, destinations, hotels } = req.body;

    // Validate required fields
    if (!name || !description || !duration) {
      return res.status(400).json({ message: 'Please provide name, description, and duration' });
    }

    // Create a new tour
    const newTour = new Tour({
      name,
      description,
      duration,
      destinations, // Array of destination IDs
      hotels, // Array of hotel IDs
      createdBy: admin.id, // Store the admin's user ID
    });

    // Save the tour to the database
    await newTour.save();

    // Return the created tour
    res.status(201).json({
      message: 'Tour created successfully',
      tour: newTour,
    });
  } catch (error) {
    console.error('Error creating tour:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
