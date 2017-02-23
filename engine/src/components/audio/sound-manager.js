

class SoundManager {
  /*
  */
  constructor() {}

  static normalizeVolumeDistance(maxVolume, volumeRange, p1, p2) {
		let multiplier = ((volumeRange - MathUtil.euclidianDist(p1, p2)) /
                      volumeRange);
		multiplier = multiplier > 0 ? multiplier : 0;
		return maxVolume * multiplier;
	}
}
