const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generate message', () => {
    it('should generate correct message object', () => {
        const from = 'hiep';
        const text = 'abc';
        const message = generateMessage(from, text);
        expect(message).toInclude({from, text})
        expect(message.createdAt).toBeA('number');
    });
});

describe('generate location message', () => {
    it('should generate correct location object', () => {
        const from = 'hiep';
        const longitude = 1;
        const latitude = 1;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = generateLocationMessage(from, latitude, longitude);
        expect(message).toInclude({from, url});
        expect(message.createdAt).toBeA('number');
    });
});