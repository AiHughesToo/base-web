import '../styles/main_style.scss';


const MainContent = ({ user }) => {

    return (
        <div className='login-content'>
            <div> Main Contnet is contained here</div>
            <div> {user.fName + ' ' + user.lName}</div>
        </div>
    );
};


export default MainContent;