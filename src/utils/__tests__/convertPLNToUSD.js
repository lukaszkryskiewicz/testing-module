import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN in case input is a string', () => {
    expect(convertPLNToUSD('test')).toBeNaN();
    expect(convertPLNToUSD('asda')).toBeNaN();
    expect(convertPLNToUSD('-4')).toBeNaN();
    expect(convertPLNToUSD('200')).toBeNaN();
  });

  it('should return NaN in case input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return Error in case input is not string or number', () => {
    expect(convertPLNToUSD(true)).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(function () { })).toBe('Error');

  });

  it('should return $0.00 in case input is a negative number', () => {
    expect(convertPLNToUSD(-5)).toBe('$0.00');
    expect(convertPLNToUSD(-1.3)).toBe('$0.00');
    expect(convertPLNToUSD(-10000)).toBe('$0.00');

  });


});

