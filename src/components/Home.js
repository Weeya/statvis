import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    bodytail: {
        textAlign: "justify",
    },
});

class Home extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Typography variant="h4" gutterBottom component="h2">
                    ข้อมูลทั่วไป
                </Typography>
                <Typography variant="body1" gutterBottom component="h4" className={classes.bodytail}>
                    &nbsp;&nbsp;&nbsp;&nbsp;กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม (Ministry of Natural Resources and Environment) 
                    ถูกจัดตั้งขึ้นในปี พ.ศ. 2545 เพื่อการสงวน อนุรักษ์ และฟื้นฟู ทรัพยากรธรรมชาติ และสิ่งแวดล้อมในประเทศไทย

                    โดยมีหน่วยงานในสังกัดรวม 15 หน่วยงาน แบ่งเป็นหน่วยงานระดับกรม 10 หน่วยงานราชกาล, รัฐวิสาหกิจ 3 หน่วยงาน และองค์การมหาชน 2 หน่วยงาน และสามารถแบ่งตามลักษณะงานได้
                    1. กลุ่มภารกิจด้านอำนวยการ
                    สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม
                    สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม

                    2. กลุ่มภารกิจด้านทรัพยากรธรรมชาติ
                    กรมอุทยานแห่งชาติสัตว์ป่าและพันธุ์พืช
                    กรมป่าไม้
                    กรมทรัพยากรทางทะเลและชายฝั่ง
                    องค์การสวนสัตว์
                    องค์การสวนพฤกษศาสตร์
                    องค์การอุตสาหกรรมป่าไม้
                    สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ

                    3. กลุ่มภารกิจด้านทรัพยากรน้ำในแผ่นดิน
                    กรมทรัพยากรน้ำ
                    กรมทรัพยากรน้ำบาดาล

                    4. กลุ่มภารกิจด้านสิ่งแวดล้อม
                    กรมควบคุมมลพิษ
                    กรมส่งเสริมคุณภาพสิ่งแวดล้อม
                    องค์การบริหารจัดการก๊าซเรือนกระจก

                    ชื่อย่อของหน่วยงาน 
                    - mnre สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม
                    - pcd กรมควบคุมมลพิษ
                    - dmcr กรมทรัพยากรทางทะเลและชายฝั่ง
                    - dmr กรมทรัพยากรธรณี
                    - dwr กรมทรัพยากรน้ำ 
                    - dgr กรมทรัพยากรน้ำบาดาล
                    - forest กรมป่าไม้
                    - deqp กรมส่งเสริมคุณภาพสิ่งแวดล้อม
                    - dnp กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช
                    - onep สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม
                    - bedo สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ (องค์การมหาชน)
                    - tgo องค์การบริหารจัดการก๊าซเรือนกระจก (องค์การมหาชน)
                </Typography>
            </Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);