const Chooses = {
    rock: {paper: false, scissors: true, rock: null},
    paper: {rock: true, scissors: false, paper: null},
    scissors: {rock: false, paper: true, scissors: null}
}

function getComputerChoice()
{
    const chooseArr = ['rock', 'paper', 'scissors'];

    return Chooses[chooseArr[Math.floor(Math.random() * 3)]]
}

function playRound(userChoise, getComputerChoice)
{
    let choose = userChoise.toLowerCase()

    if(getComputerChoice[choose])
    {
        return -1
    }
    if(getComputerChoice[choose] == null)
    {
        return 0
    }
    return 1
}

function getKeyByValue(object, value)
{
    return Object.keys(object).find(key => object[key] === value)
}

function game()
{
    const score = {
        user: 0, 
        computer: 0
    }

    for(let i = 0; i < 5; i++)
    {
        let res = playRound(prompt(), getComputerChoice())
        console.log(res)
        if(res == -1)
        {
            console.log('You lose')
            score.computer++
        }
        if(res == 1)
        {
            console.log('You win')
            score.user++
        }
    }

    if(score.user > score.computer)
    {
        return alert('You win the game!')
    }
    
    if(score.user < score.computer)
    {
        return alert('You lose the game!')
    }

    return alert('Draw!')
}

game()
