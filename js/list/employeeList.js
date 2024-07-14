class EmployeeList {
    constructor() {
        // Đảm bảo jQuery đã sẵn sàng trước khi liên kết sự kiện click
        $(document).ready(() => {
            this.addEventListeners();
        });
    }

    /**
     * Hàm bắt sự kiện
     * Nhthai 14.07.2024
     */
    addEventListeners() {
        let me = this;

        $("#btnGreenDown").click(() => {
            me.eventCombobox('Show');
        });

        $("#btnGreenUp").click(() => {
            me.eventCombobox('Hide');
        });

        // sự kiện mở form thêm
        $("#btnAdd").click(() => {
            $("#employeeDetail").show();
        });

        // sự kiện mở form thêm
        $("#btnX").click(() => {
            $("#employeeDetail").hide();
        });
    }


    /**
     * Ẩn hiện menu
     * Nhthai 14.07.2024
     */
    eventCombobox(mode) {
        let me = this;

        if (mode == 'Show') {
            $("#content").show();
            $("#btnGreenUp").show();
            $("#btnGreenDown").hide();
        }
        else {
            $("#content").hide();
            $("#btnGreenUp").hide();
            $("#btnGreenDown").show();
        }
    }


    openFormAdd(){
        let me = this;
    }
}

var oEmployeeList = new EmployeeList();