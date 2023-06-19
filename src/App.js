import Form from "./components/Form";

const FORM_FIELDS = [
    {
        //title: "Страница 1",
        inputs: [
            {
                name: "Место посадки",
                description: "Аэропорт, железнодорожная станция, отель или точный адрес",
                type: "text",
                required: true,
                id: "ladingPlace"
            },
            {
                name: "Место назначения",
                description: "Аэропорт, железнодорожная станция, отель или точный адрес",
                type: "text",
                required: true,
                id: "destinationPlace"
            },
            {
                name: "Номер рейса",
                description: "Детали рейса, номер поезда, с которым вы прибываете",
                type: "text",
                required: true,
                id: "flightNumber"
            }
        ]
    },
    {
        //title: "Страница 2",
        inputs: [
            {
                name: "Дата и время подачи",
                description: "Укажите дату и время трансфера в формате дд/мм/гггг чч/мм",
                type: "datetime-local",
                required: true,
                id: "submissionTime"
            },
            {
                name: "В обе стороны?",
                type: "checkbox",
                required: false,
                id: "inBothSides",
                value: false
            },
            {
                name: "Дата и время назад",
                description: "Укажите дату и время обратного трансфера в формате дд/мм/гггг чч/мм",
                type: "datetime-local",
                required: false,
                id: "returnTime",
                disabled: true,
                dependent: "inBothSides",
            }
        ]
    },
    {
        //title: "Страница 3",
        inputs: [
            {
                name: "Число взрослых пассажиров",
                type: "number",
                required: true,
                id: "adultsNumber"
            },
            {
                name: "Дети и их возраст",
                description: "Детские кресла предоставляются бесплатно",
                type: "text",
                required: false,
                id: "kidsNumberAge"
            },
            {
                name: "Багаж",
                type: "text",
                required: false,
                id: "luggage"
            },
            {
                name: "Негабаритный багаж",
                description: "Укажите количество негабаритного багажа, с описанием и приблизительными размерами",
                type: "text",
                required: false,
                id: "oversizedLuggage"
            }
        ]
    },
    {
        //title: "Страница 4",
        inputs: [
            {
                name: "Выбор машины",
                type: "select",
                required: true,
                id: "car",
                options: [
                    {value: 1, name: "Comfort  klass"},
                    {value: 2, name: "Mercedes klass E (1-3 pax ) "},
                    {value: 3, name: "Mercedes klass V (4-7 pax )"},
                    {value: 4, name: "Mercedes klass S long W223"},
                    {value: 5, name: "Mercedes Sprinter (4-8 pax.)"},
                    {value: 6, name: "Mercedes Sprinter Business (4-8 pax.)"}
                ]
            },
        ]
    },
    {
        //title: "Страница 5",
        inputs: [
            {
                name: "Имя фамилия",
                type: "text",
                required: true,
                id: "nameSurname"
            },
            {
                name: "Номер телефона",
                description: "С указанием кода страны ( + xx xxx xxxxxxxx )",
                type: "phone",
                required: true,
                id: "phone"
            },
            {
                name: "Электронная почта",
                description: "Мы отправим котировку по услуге трансфера на этот адрес",
                type: "email",
                required: true,
                id: "email"
            },
            {
                name: "Дополнительная информация",
                description: "Ваши пожелания и вопросы, не включенные в другие поля",
                type: "textarea",
                required: false,
                id: "additionalInfo"
            }
        ]
    },
];

function App() {
    return (
        <Form fields={FORM_FIELDS} />
    );
}

export default App;
