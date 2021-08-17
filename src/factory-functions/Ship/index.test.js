import { expect, test } from '@jest/globals';
import Ship from './index';

const stubShip = Ship('Submarrine', 3);

describe('hit() method', () => {
	test('it updates shipState', () => {
		stubShip.hit(1);
		expect(stubShip.shipState).toEqual(['safe', 'hit', 'safe']);
	});

	test('it does not change ship length', () => {
		stubShip.hit(99);
		expect(stubShip.length).toBe(3);
		expect(stubShip.shipState.length).toBe(3);
	});
});

describe('getSunkStatus() method', () => {
	test('it returns correct initial sunk status', () => {
		expect(stubShip.getSunkStatus()).toBeFalsy();
	});

	test('it returns correctly when ship is sunk', () => {
		stubShip.hit(0);
		stubShip.hit(1);
		stubShip.hit(2);
		expect(stubShip.getSunkStatus()).toBeTruthy();
	});
});
