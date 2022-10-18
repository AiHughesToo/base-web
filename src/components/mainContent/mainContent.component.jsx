import '../styles/main_style.scss';
import { connect } from "react-redux";
import Card from '../card/card.component';


const MainContent = (props) => {
    console.log('loging them props');
    console.log(props);
    return (
        <div className='login-content'>
            <div></div>
            <div>Hello {props.user.fName}</div>

            {props.employees.map((employee) => (
                <Card key={employee.id} title={employee.f_name} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
      employees: state.employees.employeeList,
      user: state.user
    };
  };

export default connect(mapStateToProps, { }) (MainContent);