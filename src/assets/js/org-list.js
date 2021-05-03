import icon from "../img/icon.png";
const arr = [
    {
        name: "Ekas Pty Ltd",
        img: icon,
        show: false,
        id: 1,
        child: [
            {
                name: "Monica",
                email: "monica.li@ekas.com",
                permission: "owner",
            },
            {
                name: "Lawrence",
                email: "Lawrence.liu@ekas.com",
                permission: "can edit",
            },
        ],
    },
    {
        name: "item2",
        img: icon,
        show: false,
        id: 2,
        child: [
            {
                name: "name",
                email: "email",
                permission: "permission",
            },
        ],
    },
];
export default arr;
