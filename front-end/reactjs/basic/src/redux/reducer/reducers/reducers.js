const stateGame = {
  tongTien: 100,
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./bauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./bauCua/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./bauCua/ca.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./bauCua/ga.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./bauCua/nai.png", diemCuoc: 0 },
  ],
  xucXac: [
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./bauCua/bau.png", diemCuoc: 0 },
  ],
};
const BauCuaTomCaReducer = (state = stateGame, action) => {
  switch (action.type) {
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        //random 3 lan va tao xuc xac 3 lan
        let soNgauNhien = Math.floor(Math.random() * 6);

        //tao xuc sac ngau nhien
        let xucXacNgauNhien = {
          ma: state.danhSachCuoc[soNgauNhien].ma,
          hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }

      //xu li tang diem

      mangXucXacNgauNhien.forEach((xucXac, index) => {
        //tim tung quan cuoc trong mang xuc xac
        let indexQuanCuoc = state.danhSachCuoc.findIndex(
          (quanCuoc) => quanCuoc.ma === xucXac.ma
        );
        if (indexQuanCuoc !== -1) {
          state.tongTien += state.danhSachCuoc[indexQuanCuoc].diemCuoc;
        }
      });
      //xu li hoan tien
      state.danhSachCuoc.forEach((quanCuoc, index) => {
        let indexXucXac = mangXucXacNgauNhien.findIndex(
          (xucXacNN) => xucXacNN.ma === quanCuoc.ma
        );
        if (indexXucXac !== -1) {
          state.tongTien += quanCuoc.diemCuoc;
        }
      });
      //reset mang cuoc
      let resetMangCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
        return {
          ...quanCuoc,
          diemCuoc: 0,
        };
      });
      return {
        ...state,
        xucXac: mangXucXacNgauNhien,
        danhSachCuoc: resetMangCuoc,
      };
      break;
    }

    case "DAT_CUOC":
      let danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (quanCuoc) => quanCuoc.ma === action.quanCuoc.ma
      );
      if (index !== -1) {
        if (state.tongTien > 0) {
          danhSachCuocUpdate[index].diemCuoc += 10;
          state.tongTien -= 10;
        } else {
          alert("Cong da het tien xin vui long nap them");
        }
      }
      return { ...state, danhSachCuoc: danhSachCuocUpdate };

    default:
  }
  return { ...state };
};
export default BauCuaTomCaReducer;
