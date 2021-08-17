export default function ShipFactory(name, length) {
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
		if (position >= length || position < 0) return;
		shipState[position] = 'hit';
	}

	function getSunkStatus() {
		const firstSafeSpot = shipState.find(position => position === 'safe');
		return !firstSafeSpot;
	}

	return { name, length, shipState, getSunkStatus, hit };
}
