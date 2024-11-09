
    let productInfoList = JSON.parse(localStorage.getItem('productList'));
    let userList = JSON.parse(localStorage.getItem('userList'));
    
    let sampleRow = document.getElementById('sampleRow');

    for (let i = 0; i < userList.length; ++i) {
        let addRowUserWait = sampleRow.cloneNode(true);
        addRowUserWait.id = "";
        addRowUserWait.classList.remove('d-none');
        let nameUserInGioHang = addRowUserWait.querySelector('#nameUserInGioHang');
        nameUserInGioHang.id = userList[i].userName;
        nameUserInGioHang.innerText = userList[i].userName;

        let giohangcuaUser = addRowUserWait.querySelector('#giohangcuaUser').cloneNode(false);
        giohangcuaUser.id = "";
        for (let j = 0; j < userList[i].data.wait.length; ++j) {

            let sanphamInGioHang = addRowUserWait.querySelector('#sanphamInGioHang').cloneNode(true);
            sanphamInGioHang.id = "";

            let IDSPInGioHang = sanphamInGioHang.querySelector('#IDSPInGioHang');
            IDSPInGioHang.id = "";
            IDSPInGioHang.innerText = userList[i].data.wait[j].item;
            
            let tongtienInGioHang = sanphamInGioHang.querySelector('#tongtienInGioHang');
            tongtienInGioHang.id = ""; 

            let nameInGioHang = sanphamInGioHang.querySelector('#nameInGioHang');
            nameInGioHang.id = "";

            for (let k = 0; k < productInfoList.length; ++k) {
                if (productInfoList[k].id == userList[i].data.wait[j].item) {
                    nameInGioHang.innerText = productInfoList[k].nameProduct;
                    tongtienInGioHang.innerText = "" + (parseInt(productInfoList[k].price) * userList[i].data.wait[j].quantity) + "Đ";
                    break;
                }
            }

            let imgInGioHang = sanphamInGioHang.querySelector('#imgInGioHang');
            imgInGioHang.id = "";
            imgInGioHang.src = `Data/${userList[i].data.wait[j].item}/2.webp`;

            let soluongInGioHang = sanphamInGioHang.querySelector('#soluongInGioHang');
            soluongInGioHang.id = "";
            soluongInGioHang.innerText = userList[i].data.wait[j].quantity;


            let xacNhanGiaoHang = sanphamInGioHang.querySelector('#xacNhanGiaoHang');
            xacNhanGiaoHang.id = "";
            xacNhanGiaoHang.onclick = function () {
                userList[i].data.deli.push(userList[i].data.wait[j]);
                userList[i].data.notificationsReceived.push({ item: userList[i].data.wait[j].item, state: 1 });
                userList[i].data.wait.splice(j, 1);
                giohangcuaUser.removeChild(sanphamInGioHang);
                localStorage.setItem('userList', JSON.stringify(userList));
            }

            let huyGiaoHang = sanphamInGioHang.querySelector('#huyGiaoHang');
            huyGiaoHang.id = "";
            huyGiaoHang.onclick = function () {
                userList[i].data.notificationsReceived.push({ item: userList[i].data.wait[j].item, state: 0 });
                userList[i].data.wait.splice(j, 1);
                giohangcuaUser.removeChild(sanphamInGioHang);
                localStorage.setItem('userList', JSON.stringify(userList));
            }

            giohangcuaUser.appendChild(sanphamInGioHang);
        }

        let showGioHangCuaUser = addRowUserWait.querySelector('#showGioHangCuaUser');
        showGioHangCuaUser.id = "";
        showGioHangCuaUser.removeChild(addRowUserWait.querySelector('#giohangcuaUser'));
        showGioHangCuaUser.appendChild(giohangcuaUser);
        showGioHang.appendChild(addRowUserWait);
    }
