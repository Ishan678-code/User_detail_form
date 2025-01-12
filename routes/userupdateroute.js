const express = require("express");
const { updateUser, updateEducation, updateExperience } = require("../database/queries");

const router = express.Router();

// PUT endpoint to update user, education, and experience data by ID
router.put("/update/:userid", async (req, res) => {
  const userid = req.params.userid;
  const { name, address, email, phone, school, level, year, company, position, duties, work_year, skills } = req.body;

  console.log("Updating data for user ID:", userid);

  try {
    // Update user data
    await updateUser({ name, address, email, phone, id: userid });
    console.log("User details updated.");

    // Update education data
    await updateEducation({ school, level, year, id: userid });
    console.log("Education details updated.");

    // Update experience data
    await updateExperience({ company, position, duties, work_year, skills, id: userid });
    console.log("Experience details updated.");

    res.status(200).send("Data updated successfully.");
  } catch (err) {
    console.error("Error during data update:", err);
    res.status(500).send("Failed to update data.");
  }
});

module.exports = router;
