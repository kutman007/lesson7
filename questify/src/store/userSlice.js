import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        username: "",
        password: "", // Храним пароль (обычно так делать нельзя, но для примера оставим)
        points: 0,
        questsCompleted: []
    },
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            if (username === "test" && password === "1234") { // Заглушка, тут должен быть запрос на сервер
                state.isAuthenticated = true;
                state.username = username;
                state.password = password;
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.password = "";
            state.points = 0;
            state.questsCompleted = [];
        },
        completeQuest: (state, action) => {
            const questId = action.payload;
            if (!state.questsCompleted.includes(questId)) {
                state.questsCompleted.push(questId);
                state.points += 10; // Начисляем баллы только если квест действительно выполнен
            }
        }
    }
});

export const { login, logout, completeQuest } = userSlice.actions;
export default userSlice.reducer;
