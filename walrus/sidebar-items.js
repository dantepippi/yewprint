initSidebarItems({"enum":[["ActiveDataLocation","The memory location where an active data segment will be automatically initialized."],["DataKind","The kind of data segment: passive or active."],["ElementKind",""],["ErrorKind","A leaf wasm error type."],["ExportItem","An exported item."],["FunctionKind","The local- or external-specific bits of a function."],["GlobalKind","The different kinds of globals a wasm module can have"],["ImportKind","An imported item."],["InitExpr","A constant which is produced in WebAssembly, typically used in global initializers or element/data offsets."],["ValType","A value type."]],"mod":[["dot","Utilities for emitting GraphViz dot files."],["ir","Intermediate representation for instructions."],["passes","Passes over whole modules or individual functions."]],"struct":[["ActiveData","The parts of a data segment that are only present in active data segments."],["Data","A data segment."],["Element","A passive segment which contains a list of functions"],["Export","A named item exported from the wasm."],["Function","A wasm function."],["FunctionBuilder","Build instances of `LocalFunction`."],["Global","A wasm global."],["IdsToIndices","Maps our high-level identifiers to the raw indices they end up emitted at."],["Import","A named item imported into the wasm."],["ImportedFunction","An externally defined, imported function."],["IndicesToIds","Maps from old indices in the original Wasm binary to `walrus` IDs."],["InstrSeqBuilder","A builder returned by instruction sequence-construction methods to build up instructions within a block/loop/if-else over time."],["LocalFunction","A function defined locally within the wasm module."],["Memory","A memory in the wasm."],["Module","A wasm module."],["ModuleConfig","Configuration for a `Module` which currently affects parsing."],["ModuleCustomSections","A collection of custom sections inside a Wasm module."],["ModuleData","All passive data sections of a wasm module, used to initialize memories via various instructions."],["ModuleElements","All element segments of a wasm module, used to initialize `anyfunc` tables, used as function pointers."],["ModuleExports","The set of exports in a module."],["ModuleFunctions","The set of functions within a module."],["ModuleGlobals","The set of globals in each function in this module."],["ModuleImports","The set of imports in a module."],["ModuleLocals","The set of locals in each function in this module."],["ModuleMemories","The set of memories in this module."],["ModuleProducers","Representation of the wasm custom section `producers`"],["ModuleTables","The set of tables in this module."],["ModuleTypes","The set of de-duplicated types within a module."],["RawCustomSection","A raw, unparsed custom section."],["Table","A table in the wasm."],["Type","A function type."],["TypedCustomSectionId","The id of a `CustomSection` instance with a statically-known type in a `ModuleCustomSections`."],["UntypedCustomSectionId","The id of some `CustomSection` instance in a `ModuleCustomSections`."]],"trait":[["CustomSection","A trait for implementing custom sections."],["CustomSectionId","A common trait for custom section identifiers."]],"type":[["CodeTransform","Maps from an offset of an instruction in the input Wasm to its offset in the output Wasm."],["DataId","A passive element segment identifier"],["ElementId","A passive element segment identifier"],["ExportId","The id of an export."],["FunctionId","A function identifier."],["GlobalId","The id of a global."],["ImportId","The id of an import."],["MemoryId","The id of a memory."],["Result","`Result<T, Error>`"],["TableId","The id of a table."],["TypeId","An identifier for types."]]});