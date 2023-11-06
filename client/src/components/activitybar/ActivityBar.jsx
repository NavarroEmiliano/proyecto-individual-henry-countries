import { useDispatch, useSelector } from "react-redux";
import deleteActivity from "./deleteActivity";
import { deleteActivityStore, getAllActivities } from "../../redux/actions";
import styles from "./ActivityBar.module.css";

/* eslint-disable react/prop-types */
const ActivityBar = ({ id, name, setActivity,setEditIsTrue }) => {
  const dispatch = useDispatch();
  const { allActivities } = useSelector((state) => state);
  const filter = allActivities.find((el) => el.name === name);

  const handleEdit = () => {
    setActivity({
      id: filter.id,
      name: filter.name,
      season: filter.season,
      duration: filter.duration,
      difficulty: filter.difficulty,
      countries: [...filter.Countries],
    });
    setEditIsTrue(true)
  };

  const handleDelete = async () => {
    await deleteActivity(id);
    dispatch(deleteActivityStore(filter.name));
    dispatch(getAllActivities());
  };

  return (
    <div className={styles.activity__container}>
      <div className={styles.activity__name}>{name}</div>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default ActivityBar;
