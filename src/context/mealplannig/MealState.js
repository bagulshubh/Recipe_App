import MealContext from "./MealContext"; 


const MealState = (props) => {

  return (
    <MealContext.Provider>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealState;
