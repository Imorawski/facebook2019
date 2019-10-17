import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
    let pipe: MyDatePipe;

    beforeEach(() => {
        pipe = new MyDatePipe();
    });

    it('should display date', () => {
        const input = 'Sat May 11 2019 22:06:07 GMT+0200 (czas środkowoeuropejski letni)';
        const output = "11 maja 2019, 22:06:07"
        expect(
            pipe.transform(input)
        ).toEqual(output);
    });

    it('should return empty string when put falsy values', () => {
        const falsyValues = [0, '', NaN, null, undefined, false];
        const output = "";

        falsyValues.forEach((input) => {
            expect(pipe.transform(input)).toEqual(output);
        });
    });
});
