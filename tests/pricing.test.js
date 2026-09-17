const { calculateDiscount } = require('../src/pricing');

test('calculateDiscount returns a number', () => {
  expect(typeof calculateDiscount()).toBe('number');
});

test('discount is within valid range', () => {
  const discount = calculateDiscount();
  expect(discount).toBeGreaterThanOrEqual(0);
  expect(discount).toBeLessThanOrEqual(0.5);
});
