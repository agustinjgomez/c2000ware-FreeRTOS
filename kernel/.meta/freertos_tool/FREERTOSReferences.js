const git_module = "c2000ware-FreeRTOS/"
const free_rtos_source = `../${git_module}kernel/FreeRTOS/Source/`
var references = [
        {
            name: "TASK",
            path: `${free_rtos_source}tasks.c`,
            alwaysInclude: false,
        },
        {
            name: "QUEUE",
            path: `${free_rtos_source}queue.c`,
            alwaysInclude: false,
        },
        {
            name: "LIST",
            path: `${free_rtos_source}list.c`,
            alwaysInclude: false,
        },
        {
            name: "TIMER",
            path: `${free_rtos_source}timers.c`,
            alwaysInclude: false,
        },
        {
            name: "EVENTS",
            path: `${free_rtos_source}event_groups.c`,
            alwaysInclude: false,
        },
        {
            name: "SBUFFER",
            path: `${free_rtos_source}stream_buffer.c`,
            alwaysInclude: false,
        },
        {
            name: "PORT",
            path: `${free_rtos_source}portable/CCS/C2000_C28x/port.c`,
            alwaysInclude: false,
        },
        {
            name: "PORTASM",
            path: `${free_rtos_source}portable/CCS/C2000_C28x/portasm.asm`,
            alwaysInclude: false,
        },
        {
            name: "HEAP1",
            path: `${free_rtos_source}portable/MemMang/heap_1.c`,
            alwaysInclude: false,
        },
        {
            name: "HEAP2",
            path: `${free_rtos_source}portable/MemMang/heap_2.c`,
            alwaysInclude: false,
        },
        {
            name: "HEAP3",
            path: `${free_rtos_source}portable/MemMang/heap_3.c`,
            alwaysInclude: false,
        },
        {
            name: "HEAP4",
            path: `${free_rtos_source}portable/MemMang/heap_4.c`,
            alwaysInclude: false,
        },
        {
            name: "HEAP5",
            path: `${free_rtos_source}portable/MemMang/heap_5.c`,
            alwaysInclude: false,
        },
        //
        // H files are not really necessary as they can be included with a -I in the opt file
        //
]


function getReferencePath(name)
{
    for (var ref of references)
    {
        if (ref.name == name)
        {
            return ref.path
        }
    }
}

var componentReferences = []
for (var ref of references)
{
    componentReferences.push({
        path: ref.path,
        alwaysInclude: ref.alwaysInclude
    })
}

exports = {
    references: references,
    getReferencePath : getReferencePath,
    componentReferences : componentReferences
}