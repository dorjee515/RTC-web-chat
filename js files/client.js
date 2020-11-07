
const socket = io('http://localhost:8000');
const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messagecontainer=document.querySelector(".container");
var audio=new Audio('Iphone Notification.mp3');  
var paudio=new Audio('tune.mp3');

const family=['dinesh','karan','rajan','sagar','raj','akki'];

const append=(message,position)=>{
    const messageelement=document.createElement('div');
    messageelement.innerText   = message;
    messageelement.classList.add('message');
    messageelement.classList.add(position);
    messagecontainer.append(messageelement);
    if(position=='left'){
        audio.play();
    }    
   }
form.addEventListener('submit',(e)=>{    
    console.log(name,'working');
    e.preventDefault();
    const message=messageInput.value;
    append(`you: ${message}`,'right'); 
    socket.emit('send',message);    
    messageInput.value='';
})


const name=prompt("enter your name:");
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{
    append(`${name} joined the chat`,'right');
    });

socket.on('receive',data=>{
    append(`${data.name}: ${data.message}`,'left');
    });

    
socket.on('left',name=>{
    append(`${name}: left the chat`,'left');
    });

    


 



    
    

