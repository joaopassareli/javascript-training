function createWeekDay() {
    const day  = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const date = new Date().toLocaleDateString('pt-BR');
    const time = new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'}
    );

    const weekDay = `${day} (${date}) às ${time}`;

    return weekDay;
}

export default createWeekDay