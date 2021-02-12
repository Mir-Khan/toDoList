import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../util/constants';
import { Col } from 'react-bootstrap';

const VisiblityFilters = ({ activeFilter, setFilter }) => {
    return (
        <Col className="visibility-filters text-center">
            {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
                        {currentFilter}
                    </span>
                )
            })}
        </Col>
    )
}

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(VisiblityFilters);