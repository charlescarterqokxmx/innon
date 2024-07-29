function processPoints(points) {
    if (points === null || !points.length) return;

    // Your logic to process points goes here
    console.log("Processing points:", points);
}

// Example usage
processPoints(null);      // This will return immediately
processPoints([]);        // This will also return immediately
processPoints([1, 2, 3]); // This will proceed to process the points
