const soldier = {
    name: 'Гилани',
    health: 10,
    weapon: {
        gun: 'AK47',
        ammunition: 30,
    },
    supplies: 3,

    fire: function(){
        this.weapon.ammunition--
        console.log('бах-бах')

        if(this.ammunition === 0){
            console.log('Обойма пуста. Перезаредитесь.')
        }
    },
    reloading: function(){
        this.weapon.ammunition = 30
        this.supplies--
        console.log('Перезарядка...')
        
        if(this.supplies === 0){
            console.log('Не осталось припасов')
        }
    },
    hurt: function(){
        this.health--
        if(this.health === 0){
            console.log('Ты проиграл.')
        }
    },

    getStatus: function(){
        console.log(`
        Имя: ${this.name},
        Здоровье: ${this.health},
        Оружие: ${this.weapon.gun},
        Патроны: ${this.weapon.ammunition}
        Обоймы: ${this.supplies}.
        `)
    },
};

soldier.hurt()
soldier.fire()
soldier.reloading()

soldier.getStatus()