import { Card, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUser } from "@/redux/slice/userSlide";
import { fetchResume } from "@/redux/slice/resumeSlide";

const DashboardPage = () => {
    const dispatch = useAppDispatch();

    // Lấy số lượng user và CV từ Redux
    const totalUsers = useAppSelector((state) => state.user.meta.total);
    const totalResumes = useAppSelector((state) => state.resume.meta.total);

    // Gọi API để lấy dữ liệu
    useEffect(() => {
        dispatch(fetchUser({ query: "" })); // Gọi API lấy user
        dispatch(fetchResume({ query: "" })); // Gọi API lấy CV
    }, [dispatch]);

    // Định dạng số hiển thị với CountUp
    const formatter = (value: number | string) => {
        return <CountUp end={Number(value)} separator="," />;
    };

    return (
        <Row gutter={[20, 20]}>
            <Col span={24} md={12}>
                <Card title="Tổng số User" bordered={false}>
                    <Statistic
                        title="User"
                        value={totalUsers}
                        formatter={formatter}
                    />
                </Card>
            </Col>
            <Col span={24} md={12}>
                <Card title="Tổng số CV" bordered={false}>
                    <Statistic
                        title="CV"
                        value={totalResumes}
                        formatter={formatter}
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default DashboardPage;
