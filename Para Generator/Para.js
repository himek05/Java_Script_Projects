const input = document.getElementById("numofwords")
const container = document.querySelector(".container")

const generateWord = (n) => {
    let text = " ";
    const letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for (let i=0; i<n; i++){
        const random = Math.floor(Math.random() * 26);
        text += letter[random];
    }

    return text;
};

const generatePara = () => {
    const numofwords = Number(input.value);

    const para = document.createElement("p");
    let data = " ";
    for (let i=0; i<numofwords; i++){
        const randomNumber = Math.floor(Math.random() * 16);
        data += generateWord(randomNumber);
        data += " ";
    }
    para.innerText = data;

    para.setAttribute("class" , "paras");

    container.append(para);
}