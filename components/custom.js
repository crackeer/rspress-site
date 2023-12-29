import React from 'react';

class Home extends React.Component {
    form = null
    constructor(props) {
        super(props); // 用于父子组件传值
        this.state = {
            isOnline: false,
            host: "",
            user: {
                name: '',
                account: '',
                user_id: '',
                user_type: '',
            },
            showLogin: false,
            loginUrl: '',
            shepherdEnv: '',
            showSetMail: false,

            displayModal: false
        }
    }
    componentDidMount = async () => {
       
    }

    render() {
        return (
            <>
            shkjahsj
            </>
        )
    }
}

export default Home;
