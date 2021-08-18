import { expect, test } from '@jest/globals';
import Ship from './index';

let stubShip = Ship('Submarrine', 3);

beforeEach(() => {
	return (stubShip = Ship('Submarrine', 3));
});

describe('hit() method', () => {
	test('hit succesfully', () => {
		expect(stubShip.hit(1)).toBe('hit successful at position 1');
	});

	test('updates shipState', () => {
		stubShip.hit(1);
		expect(stubShip.shipState).toEqual(['safe', 'hit', 'safe']);
	});

	test('does not change ship length or run with out of bound position', () => {
		stubShip.hit(99);
		stubShip.hit(-30);
		expect(stubShip.length).toBe(3);
		expect(stubShip.shipState.length).toBe(3);
	});

	test('does not run with string parameter', () => {
		stubShip.hit('a');
		expect(stubShip.shipState).toEqual(['safe', 'safe', 'safe']);
	});

	test('does not run with non-integer parameter', () => {
		stubShip.hit(1.44444);
		expect(stubShip.shipState).toEqual(['safe', 'safe', 'safe']);
	});

	test('notify if ship  is already hit at that position', () => {
		stubShip.hit(1);
		expect(stubShip.hit(1)).toEqual('that position is already hit');
	});
});

describe('getSunkStatus() method', () => {
	test('returns correct initial sunk status', () => {
		expect(stubShip.getSunkStatus()).toBeFalsy();
	});

	test('returns correctly when ship is sunk', () => {
		stubShip.hit(0);
		stubShip.hit(1);
		stubShip.hit(2);
		expect(stubShip.getSunkStatus()).toBeTruthy();
	});
});

describe('shipState property', () => {
	test('shows correct initial state', () => {
		expect(stubShip.shipState).toEqual(['safe', 'safe', 'safe']);
	});

	test('shows correct state when ship is hit', () => {
		stubShip.hit(2);
		expect(stubShip.shipState).toEqual(['safe', 'safe', 'hit']);
	});
});
