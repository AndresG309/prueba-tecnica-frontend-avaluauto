import { useState } from 'react';
// Components
import { FilterButton } from './FilterButton';
import {
    MdFilterList,
    MdLowPriority,
    MdOutlineTaskAlt,
    MdArrowDownward,
    MdRemove,
    MdArrowUpward,
    MdHourglassEmpty,
    MdAutorenew,
    MdCheckCircleOutline,
    MdFilterNone,
} from 'react-icons/md';

export function FiltersPanel({
    filters,
    subFilters,
    activeFilter,
    activeSubFilter,
    changeFilterFunction,
    changeSubFilterFunction,
}) {
    // ----------------- Variables
    const filterIcons = {
        [filters.all]: MdFilterList,
        [filters.byPriority]: MdLowPriority,
        [filters.byState]: MdOutlineTaskAlt,
    };
    const subFilterIcons = {
        [subFilters.none]: MdFilterNone, // Sin filtro
        [subFilters.priorityLow]: MdArrowDownward, // Prioridad baja
        [subFilters.priorityMedium]: MdRemove, // Prioridad media
        [subFilters.priorityHigh]: MdArrowUpward, // Prioridad alta
        [subFilters.statePending]: MdHourglassEmpty, // Pendiente
        [subFilters.stateInProgress]: MdAutorenew, // En progreso
        [subFilters.stateCompleted]: MdCheckCircleOutline, // Completada
    };

    const filterButtons = {
        [filters.all]: {
            icon: filterIcons.all,
            label: 'All',
        },
        [filters.byPriority]: {
            icon: filterIcons.byPriority,
            label: 'Priority',
        },
        [filters.byState]: {
            icon: filterIcons.byState,
            label: 'State',
        },
    };
    const subFilterPriorityButtons = {
        [subFilters.priorityHigh]: {
            icon: subFilterIcons.priorityHigh,
            label: 'High',
        },
        [subFilters.priorityMedium]: {
            icon: subFilterIcons.priorityMedium,
            label: 'Medium',
        },
        [subFilters.priorityLow]: {
            icon: subFilterIcons.priorityLow,
            label: 'Low',
        },
    };
    const subFilterStateButtons = {
        [subFilters.statePending]: {
            icon: subFilterIcons.statePending,
            label: 'Pending',
        },
        [subFilters.stateInProgress]: {
            icon: subFilterIcons.stateInProgress,
            label: 'In Progress',
        },
        [subFilters.stateCompleted]: {
            icon: subFilterIcons.stateCompleted,
            label: 'Completed',
        },
    };

    // ----------------- States
    const [isChangingFilter, setIsChangingFilter] = useState(false);

    // ----------------- Effects
    /* This was only for debug purpuoses
    useEffect(() => {
        console.log(activeFilter + ' ' + activeSubFilter);
    }, [activeFilter, activeSubFilter]);
    */

    // ----------------- Functionalities
    function handleButtonClick(filter) {
        if (isChangingFilter) {
            changeFilterFunction(filter);
            changeSubFilterFunction(subFilters.none);
            setIsChangingFilter(false);
        } else setIsChangingFilter(true);
    }
    function renderActiveFilterButton() {
        const activeFilterButton = filterButtons[activeFilter];
        if (!activeFilterButton) return null;

        return (
            <FilterButton
                icon={activeFilterButton.icon}
                label={activeFilterButton.label}
                onClick={() => handleButtonClick(activeFilter)}
                isActive={false}
            />
        );
    }
    function renderAllFiltersButtons() {
        return Object.entries(filterButtons).map(([key, { icon, label }]) => (
            <FilterButton
                key={key}
                icon={icon}
                label={label}
                onClick={() => handleButtonClick(key)}
                isActive={activeFilter === key}
            />
        ));
    }
    function renderSubFiltersButtons() {
        let buttonsToRender = [];

        if (activeFilter === filters.byPriority) {
            buttonsToRender = subFilterPriorityButtons;
        } else if (activeFilter === filters.byState) {
            buttonsToRender = subFilterStateButtons;
        } else {
            return null;
        }

        return Object.entries(buttonsToRender).map(([key, { icon, label }]) => (
            <FilterButton
                key={key}
                icon={icon}
                label={label}
                onClick={() => changeSubFilterFunction(key)}
                isActive={activeSubFilter === key}
            />
        ));
    }

    // JSX
    return (
        <div className="d-flex flex-column py-2">
            <div className="d-flex flex-column gap-2">
                {isChangingFilter
                    ? renderAllFiltersButtons()
                    : renderActiveFilterButton()}
            </div>
            {isChangingFilter ? null : (
                <>
                    {activeFilter !== filters.all ? <hr /> : null}
                    <div className="d-flex flex-column gap-2">
                        {renderSubFiltersButtons()}
                    </div>
                </>
            )}
        </div>
    );
}
