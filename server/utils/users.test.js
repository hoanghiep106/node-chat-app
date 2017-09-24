const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Hiep',
            room: 'Eastgate'
        }, {
            id: '2',
            name: 'Hoang Anh',
            room: 'Eastgate'
        }, {
            id: '3',
            name: 'Hung',
            room: 'Elite'
        }]
    });

    it('should add new user', () => {
        let users = new Users();
        const user = {
            id: '123',
            name: 'Hiep',
            room: 'Eastgate'
        };
        const res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
        expect(res).toEqual(user);
    });

    it('should remove a user', () => {
        const userId = '2';
        const user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        const userId = '99';
        const user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        const userId = '2';
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        const userId = '99';
        const user = users.getUser(userId);

        expect(user).toBe(undefined);
    });

    it('should return names for Eastgate', () => {
        const userList = users.getUserList('Eastgate');
        expect(userList).toEqual(['Hiep', 'Hoang Anh']);
    });

    it('should return names for Eastgate', () => {
        const userList = users.getUserList('Elite');
        expect(userList).toEqual(['Hung']);
    });
});