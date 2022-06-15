import React, { useEffect, useState } from "react";
import styles from "./metamask-auth.module.css";

// Metamask connect stage-2.1
function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

// Metamask connect stage-2
// 사용자가 "Connect to MetaMask" 버튼을 클릭할 때 호출
// 메타마스크를 브라우저 확장 기능으로 설치되면 페이지마다 창 개체에 이더리움 개체를 삽입
// ethereum 객체가 없으면 MetaMask가 설치되지 않았으며 "Get MetaMask!"라는 알림창이 표시되고 다운로드 페이지를 새 창에 띄움
// ethereum 객체가 존재하는 경우 MetaMask API의 eth_requestAccounts 메소드를 사용하여 사용자 지갑에 대한 연결을 요청합니다.
// 위 요청은 MetaMask에서 사용자에게 사용자 주소에 대한 애플리케이션 액세스 권한을 부여하도록 요청하는 팝업을 트리거합니다.
// MetaMask API는 사용자가 액세스 권한을 부여한 모든 계정의 목록을 반환
// 반환받은 값 중 사용 가능한 첫 번째 계정 [0]을(를) 사용하고 onConnected 콜백을 호출

async function connect(onConnected) {
    if (!window.ethereum) {
        alert("Get MetaMask!");
        window.open("https://metamask.io/download/");
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    onConnected(accounts[0]);
}

// Metamask connect stage-2
// 메타마스크의 계정이 연결되었는지 확인하는 함수
// 매개변수로 onConnected를 사용해 콜백하여 값을 사용할 수 있는 기능
async function checkIfAccountsIsConnected(onConnected) {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {      // 계정이 연결되었으면
            const account = accounts[0];        
            // ethereum의 메소드를 통해 받아온 accounts의 값 중 계정정보가 들어있는 배열의 0번째 인덱스에 존재하는 값을 사용
            onConnected(account);
            // onConnected에 계정 정보를 담아 콜백
            return;
        }

        if (isMobileDevice()) {     // 모바일 기기를 사용중일 시
            await connect(onConnected);     //
        }
    }
}

// Metamask connect stage-1
export default function MetaMaskAuth({ onAddressChanged }) {
    const [userAddress, setUserAddress] = useState("");
    // 사용자의 연결된 주소를 저장 하는 상태 변수를 사용

    useEffect(() => {
        checkIfAccountsIsConnected(setUserAddress); // 페이지가 처음 로드될 때 확인
        // 메타마스크의 계정이 연결되었는지 확인하는 함수
        // setUserAddress를 매개변수로 사용하여 userAddress의 값을 설정할 수 있는 기능
    }, []);
    // 윈도우에 구성 요소를 처음 장착하면 사용자가 이미 지갑을 연결했는지 확인
    // (IfWalletIsConnected 기능 확인은 잠시 후)

    useEffect(() => {
        onAddressChanged(userAddress);
    }, [onAddressChanged, userAddress]);
    // userAddress 상태 변수가 변경될 때마다 제공된 onAddressChanged 콜백을 사용
    // (이는 상위 구성 요소가 연결된 사용자 주소를 알아야 하는 경우를 위한 것)

    return userAddress ? (
        <div>
            Connected with <Address userAddress={userAddress} />
        </div>
    ) : (
        <Connect setUserAddress={setUserAddress}/>
    );
    // userAddress가 비어 있으면 "MetaMask에 연결" 단추를 표시하고, 
    // userAddress에 값이 존재할 경우 "Connected with ~" 메시지를 표시
}


function Connect({ setUserAddress }) {
    if (isMobileDevice()) {
        const dappUrl = "18.207.114.82"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        return (
            <a href={metamaskAppDeepLink}>
                <button className={styles.button}>
                    Connect to MetaMask
                </button>
            </a>
        );
    }

    return (
        <button className={styles.button} onClick={() => connect(setUserAddress)}>
            Connect to MetaMask
        </button>
    );
}


function Address({ userAddress }) {
    return (
        <span className={styles.address}>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
    );
}