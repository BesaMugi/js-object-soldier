const soldier = {
    name: 'Гилани',
    health: 10,
    weapon: {
        gun: 'AK47',
        ammunition: 3,
    },
    supplies: 3,

    fire: function(){
        if(this.weapon.ammunition === 0){
            console.log('Обойма пуста. Перезаредитесь.')
        }else{
        this.weapon.ammunition--
        console.log('бах-бах')
    }
    },
    reloading: function(){
        
        if(this.supplies === 0){
            console.log('Не осталось припасов')
        }else{
            this.weapon.ammunition = 3
            this.supplies--
            console.log('Перезарядка...')
        }
    },
        hurt: function(){
            this.health--

            if(this.health === 0){
                console.log('Ты проиграл.')
        }
    },

    getStatus: function(){
        console.log(`Имя: ${this.name}, Здоровье: ${this.health}, Оружие: ${this.weapon.gun}, Патроны: ${this.weapon.ammunition}, Обоймы: ${this.supplies}.`)
    },
};

soldier.hurt()

soldier.fire()

soldier.reloading()

soldier.getStatus()