import Person from './Person';

const List = ({ pepole }) => {
  return (
    <div>
      {pepole.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
