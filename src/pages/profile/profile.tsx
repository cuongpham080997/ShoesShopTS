import { getProfile } from "@/services";
import { useEffect, useState } from "react";

export default function Profile() {
    const [profile, setProfile] = useState({
        name: "",
        image: "https://i.pravatar.cc?img=1",
        email: "",
    });

    useEffect(() => {
        getProfile()
            .then((r) => setProfile(r.data.content))
            .catch(console.log);
    }, []);

    return (
        <>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <img className="h-16 w-16" src={profile.image} alt="avatar" />
        </>
    );
}
