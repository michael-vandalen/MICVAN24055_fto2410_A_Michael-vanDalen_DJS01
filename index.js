/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity in km/h
const acceleration = 3; // acceleration in m/s²
const time = 3600; // time in seconds
const distance = 0; // initial distance in km
const fuel = 5000; // initial fuel in kg
const fuelBurnRate = 0.5; // fuel burn rate in kg/s

const velocity_ms = velocity * (1000 / 3600); // Convert km/h to m/s

const newDistance = distance + velocity * (time / 3600); //calcultes new distance
const remainingFuel = fuel - fuelBurnRate * time; //calculates remaining fuel
const newVelocity = calcNewVel({ acceleration, velocity_ms, time }); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel({ acceleration, velocity_ms, time }) {
  if (
    typeof acceleration !== "number" ||
    typeof velocity_ms !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error(
      "Invalid input: Acceleration, velocity, and time must be numbers."
    );
  }
  return (velocity_ms + acceleration * time) * (3600 / 1000);
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
