import { connect } from 'react-redux';
import { Layout } from '../../components/layouts';
import { get } from 'lodash';

const DichVuItem = (props) => {

  const newData = props.data.find(item => item.link === get(props, 'router.asPath'));

  if (!newData) {
    return (
      <Layout>
        ...Loading
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container hv-100 py-4">
        <div dangerouslySetInnerHTML={{ __html: newData.content }} />
      </div>
    </Layout>
  );
}

const mapStateToProps = state => ({
  data: state.dichvu.listDichVu
});

export default connect(
  mapStateToProps,
  null
)(DichVuItem);