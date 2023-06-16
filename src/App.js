import Form from "./components/Form";

const FORM_FIELDS = [
    {
        //title: "Страница 1",
        inputs: [
            {
                name: "Место посадки",
                type: "text",
                required: true,
                id: "ladingPlace"
            },
            {
                name: "Место назначения",
                type: "text",
                required: true,
                id: "destinationPlace"
            },
            {
                name: "Номер рейса",
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
                type: "text",
                required: false,
                id: "kidsNumberAge"
            },
            {
                name: "Багаж",
                type: "text",
                required: true,
                id: "luggage"
            },
            {
                name: "Негабаритный багаж",
                type: "text",
                required: true,
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
                    {value: 1, name: "Машина 1"},
                    {value: 2, name: "Машина 2"},
                    {value: 3, name: "Машина 3"},
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
                type: "phone",
                required: true,
                id: "phone"
            },
            {
                name: "Электронная почта",
                type: "email",
                required: true,
                id: "email"
            },
            {
                name: "Дополнительная информация",
                type: "textarea",
                required: true,
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
