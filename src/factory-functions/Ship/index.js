export default function Ship(name, length) {
	let shipState = [];

	function _setInitialShipState() {
		const result = [];
		for (let i = 0; i < length; i += 1) {
			result.push('safe');
		}
		shipState = result;
	}
	_setInitialShipState();

	function hit(position) {
		if (!Number.isInteger(position)) return;
		if (position >= length || position < 0) return;
		if (shipState[position] === 'hit') return 'that position is already hit';
		shipState[position] = 'hit';
		return `hit successful at position ${position}`;
	}

	function getSunkStatus() {
		const firstSafeSpot = shipState.find(position => position === 'safe');
		return !firstSafeSpot;
	}

	return { name, length, shipState, getSunkStatus, hit };
}
