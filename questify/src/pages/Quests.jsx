import { useDispatch, useSelector } from "react-redux";
import { fetchQuest } from "../store/questSlice";
import { Button, Card, Spin } from "antd";
import { completeQuest as completeQuestAction } from "../store/userSlice";
import "../styles/global.css";

const Quests = () => {
    const dispatch = useDispatch();
    const { quest, status } = useSelector(state => state.quest);
    const { isAuthenticated, points } = useSelector(state => state.user);

    const handleCompleteQuest = () => { // Меняем название, чтобы не конфликтовало
        dispatch(completeQuestAction(quest.id)); // Передаём ID квеста
        dispatch(fetchQuest());
    };

    return (
        <div>
            <h1>Ваше случайное задание</h1>
            {isAuthenticated ? (
                <>
                    {status === "loading" && <Spin />}
                    {quest && (
                        <Card style={{ width: 300, margin: '20px auto' }}>
                            <p>{quest.activity}</p>
                        </Card>
                    )}
                    <Button type="primary" onClick={handleCompleteQuest}>
                        Выполнить и получить 10 очков
                    </Button>
                    <p>Ваши очки: {points}</p>
                </>
            ) : (
                <div>
                    <p>Войдите, чтобы получать квесты</p>
                </div>
            )}
        </div>
    );
};

export default Quests;
