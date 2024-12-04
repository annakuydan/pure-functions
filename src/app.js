export default function healthCheck(player) {
    let result = '';
    if (player.health > 50) {
        result = 'healthy';
    } else if (player.health >= 15) {
        result = 'wounded';
    } else {
        result = 'critical';
    };
    return result;
}