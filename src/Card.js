export default function Card() {
    const users = [
        {
            id: 1,
            name: "Sebastian",
            image: "https://robohash.org/user1",
        },
        {
            id: 2,
            name: "Alejo",
            image: "https://robohash.org/user2",
        },
        {
            id: 3,
            name: "Daniel",
            image: "https://robohash.org/user3",
        },
        {
            id: 4,
            name: "Felipe",
            image: "https://robohash.org/user4",
        },
    ];

    return (
        <>
            {users.map((user, i) => {
                return (
                    <div key={i}>
                        <h1>{user.name}</h1>
                        <img src={user.image} alt="ProfilePhoto" />
                    </div>
                );
            })}
        </>
    );
}
