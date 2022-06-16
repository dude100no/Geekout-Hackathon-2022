const url = "https://backend-production-2f94.up.railway.app"

export const sentiment_value = async (sender, recipient) => {
    let body = {"sender":2, "recipient":3}
    const sentiment = await fetch(url + "/user/sentiment/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).json();
    return sentiment;
};

export const get_user_info = async (userid) => {
    const userinfo = await fetch(url + `/user/${userid}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).json();
    return userinfo;
};

export const add_user_info = async (firstname, lastname, type) => {
    let body = {'firstname': firstname, 'lastname': lastname, 'type':type};
    const added = await fetch(url + `/user`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).json();
    return added;
};

export const user_msg_view = async (userid) => {
    const user_msg = await fetch(url + `/user/messages/${userid}`, {
        method: "GET",
        heaeders: {
            'Content-Type': 'application/json'
        }
    });
    return user_msg;
};