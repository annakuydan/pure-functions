import healthCheck from '../app'

test ('healthCheck', () => {
    const player = {name: 'Маг', health: 90};
    const result = healthCheck(player);
    expect(result).toBe('healthy');
});

test ('healthCheck', () => {
    const player = {name: 'Маг', health: 15};
    const result = healthCheck(player);
    expect(result).toBe('wounded');
});

test ('healthCheck', () => {
    const player = {name: 'Маг', health: 14};
    const result = healthCheck(player);
    expect(result).toBe('critical');
});