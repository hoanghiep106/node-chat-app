const expect = require('expect');
const {generateMessage} = require('./message');

describe('generate message', () => {
    it('should generate correct message object', () => {
        const from = 'hiep';
        const text = 'abc';
        const message = generateMessage(from, text);
        expect(message).toInclude({from, text})
        expect(message.createdAt).toBeA('number');
    });
});