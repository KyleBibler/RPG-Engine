
class MathUtil {

	static randomInt(min, max) {
		return Math.floor((Math.random() * (max - min + 1)) + min);
	}

	static either() {
		if (arguments.length === 0) {
			return undefined;
		}
		return arguments[MathUtil.randomInt(0, arguments.length - 1)];
	}

	static eitherFromList(list) {
		if (list.length === 0) {
			return undefined;
		}

		return list[MathUtil.randomInt(0, list.length - 1)];
	}

	static euclidianDist(pos1, pos2) {
    const xDel = pos1.x - pos2.x;
    const yDel = pos1.y - pos2.y;
		return Math.sqrt(xDel * xDel + yDel * yDel);
	}

	static modRadians(radians) {
		while (radians < 0) {
			radians += 2 * Math.PI;
		}

		return radians % (2 * Math.PI);
	}

	static pointCompare(p1, p2, eps) {
    /* Checks if 2 points are equal within a margin
    Args:
      p1: Point - First point to compare
      p2: Point - Second point to compare
      eps: double - Margin of equality, should be positive
    Returns:
      @: boolean - Whether the two points are considered equal
    */
		if(eps === undefined) {
			return p1.x === p2.x && p1.y === p2.y;
		}
		else {
			return MathUtil.euclidianDist(p1, p2) <= eps;
		}
	}

	static approxEq(v1, v2, eps) {
    /* Checks if 2 values are equal within a margin
    Args:
      v1: double - First value to compare
      v2: double - Second value to compare
      eps: double - Margin of equality, should be positive
    Returns:
      @: boolean - Whether the two values are considered equal
    */
    if (eps === undefined) {
      return v1 === v2;
    }
		return Math.abs(v1 - v2) < eps;
	}

	static range(limit) {
    /* Generates an array containing incrementing values
    Args:
      limit: int - Max value + 1 of the returned array
    Returns:
      output: array[int] - array of incrementing values starting at 0
    */
		var output = [];

		if (limit < 0) {
			return output;
		}
		for (let i = 0; i < limit; i++) {
			output.push(i);
		}
		return output;
	}	

	static getMidpoint(tl, br) {
		return {
			x: (tl.x + br.x)/2,
			y: (tl.y + br.y)/2
		}
	}
}
