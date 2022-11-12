function generate_cards(order, symbols) {
  let projective_plane = []; // Create array for projective plane. This will eventually contain all points
  let affine_plane = []; // Create array for affine plane. This contains just the main grid
  let infinite_converge_line = []; // The infinite converge line is where all parallell lines converge

  for (let row_idx = 0; row_idx < order; row_idx += 1) {
    // Create "order" amount of rows
    affine_plane.push([]);

    for (let point_idx = 0; point_idx < order; point_idx += 1) {
      // Create "order" amount of points within each row
      affine_plane[row_idx].push([]);
    }
  }

  for (let point_idx = 0; point_idx < order + 1; point_idx += 1) {
    // Create "order" + 1 amount of points upon the infinite converge line
    infinite_converge_line.push([]);
  }

  for (let point_idx = 0; point_idx < order; point_idx += 1) {
    // Loop through the top row of points, as this is where each line begins (apart from the horizontals, which will be added later)
    for (let line = 0; line < order; line++) {
      // Loop through each line. Each line represents a symbol. The index also represents the negative gradient of the line

      let point_coord = { x: point_idx, y: 0 }; // Create an array for the coordinates of each new point

      for (
        let points_on_line = 0;
        points_on_line < order;
        points_on_line += 1
      ) {
        // Loop through "order" amount of points on each line

        affine_plane[point_coord.y][point_coord.x].push(symbols[line]); // Add the new symbol to each point

        point_coord.y += 1; // Go to the next row of points

        if (point_coord.x + line > order - 1) {
          // Add together the x coordinate of the new point and the amount that will be added to it (the line gradient). If the amount exceeds the length of a row, add the line gradient minus the order
          point_coord.x += line - order;
        } else {
          // Otherwise, add the line gradient to the x coordinate of the new point
          point_coord.x += line;
        }
      }

      infinite_converge_line[line].push(symbols[line]); // Add the common symbol for this line to the infinite line
      symbols.splice(line, 1); // Remove the symbol from the list of symbols
    }
  }

  for (let row of affine_plane) {
    // Loop through each row of the finite projective plane
    for (let point of row) {
      // For each point, append a common symbol
      point.push(symbols[0]);
    }

    infinite_converge_line[order].push(symbols[0]); // The line at which all points converge will have a set of common symbols
    symbols.splice(0, 1); // Remove the symbol from the list of symbols
  }

  for (let point of infinite_converge_line) {
    point.push(symbols[0]); // Add a common symbol to each point on the infinite converge line
  }

  for (let row of affine_plane) {
    projective_plane.push(row); // Add each row of the affine plane to the projective plane
  }

  projective_plane.push(infinite_converge_line); // Add the infinite converge line to the projective plane

  return projective_plane;
}

module.exports = { generate_cards };
