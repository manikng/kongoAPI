/*
Carbon

Connect external data to LLMs, no matter the source.

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package carbon

import (
	"encoding/json"
)

// OutlookSyncInput struct for OutlookSyncInput
type OutlookSyncInput struct {
	Tags map[string]interface{} `json:"tags,omitempty"`
	Folder NullableString `json:"folder,omitempty"`
	Filters map[string]interface{} `json:"filters"`
	ChunkSize NullableInt32 `json:"chunk_size,omitempty"`
	ChunkOverlap NullableInt32 `json:"chunk_overlap,omitempty"`
	SkipEmbeddingGeneration NullableBool `json:"skip_embedding_generation,omitempty"`
	EmbeddingModel *EmbeddingGenerators `json:"embedding_model,omitempty"`
	GenerateSparseVectors NullableBool `json:"generate_sparse_vectors,omitempty"`
	PrependFilenameToChunks NullableBool `json:"prepend_filename_to_chunks,omitempty"`
}

// NewOutlookSyncInput instantiates a new OutlookSyncInput object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOutlookSyncInput(filters map[string]interface{}) *OutlookSyncInput {
	this := OutlookSyncInput{}
	var folder string = "Inbox"
	this.Folder = *NewNullableString(&folder)
	this.Filters = filters
	var chunkSize int32 = 1500
	this.ChunkSize = *NewNullableInt32(&chunkSize)
	var chunkOverlap int32 = 20
	this.ChunkOverlap = *NewNullableInt32(&chunkOverlap)
	var skipEmbeddingGeneration bool = false
	this.SkipEmbeddingGeneration = *NewNullableBool(&skipEmbeddingGeneration)
	var generateSparseVectors bool = false
	this.GenerateSparseVectors = *NewNullableBool(&generateSparseVectors)
	var prependFilenameToChunks bool = false
	this.PrependFilenameToChunks = *NewNullableBool(&prependFilenameToChunks)
	return &this
}

// NewOutlookSyncInputWithDefaults instantiates a new OutlookSyncInput object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOutlookSyncInputWithDefaults() *OutlookSyncInput {
	this := OutlookSyncInput{}
	var folder string = "Inbox"
	this.Folder = *NewNullableString(&folder)
	var chunkSize int32 = 1500
	this.ChunkSize = *NewNullableInt32(&chunkSize)
	var chunkOverlap int32 = 20
	this.ChunkOverlap = *NewNullableInt32(&chunkOverlap)
	var skipEmbeddingGeneration bool = false
	this.SkipEmbeddingGeneration = *NewNullableBool(&skipEmbeddingGeneration)
	var generateSparseVectors bool = false
	this.GenerateSparseVectors = *NewNullableBool(&generateSparseVectors)
	var prependFilenameToChunks bool = false
	this.PrependFilenameToChunks = *NewNullableBool(&prependFilenameToChunks)
	return &this
}

// GetTags returns the Tags field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OutlookSyncInput) GetTags() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}
	return o.Tags
}

// GetTagsOk returns a tuple with the Tags field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OutlookSyncInput) GetTagsOk() (map[string]interface{}, bool) {
	if o == nil || isNil(o.Tags) {
    return map[string]interface{}{}, false
	}
	return o.Tags, true
}

// HasTags returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasTags() bool {
	if o != nil && isNil(o.Tags) {
		return true
	}

	return false
}

// SetTags gets a reference to the given map[string]interface{} and assigns it to the Tags field.
func (o *OutlookSyncInput) SetTags(v map[string]interface{}) {
	o.Tags = v
}

// GetFolder returns the Folder field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OutlookSyncInput) GetFolder() string {
	if o == nil || isNil(o.Folder.Get()) {
		var ret string
		return ret
	}
	return *o.Folder.Get()
}

// GetFolderOk returns a tuple with the Folder field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OutlookSyncInput) GetFolderOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return o.Folder.Get(), o.Folder.IsSet()
}

// HasFolder returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasFolder() bool {
	if o != nil && o.Folder.IsSet() {
		return true
	}

	return false
}

// SetFolder gets a reference to the given NullableString and assigns it to the Folder field.
func (o *OutlookSyncInput) SetFolder(v string) {
	o.Folder.Set(&v)
}
// SetFolderNil sets the value for Folder to be an explicit nil
func (o *OutlookSyncInput) SetFolderNil() {
	o.Folder.Set(nil)
}

// UnsetFolder ensures that no value is present for Folder, not even an explicit nil
func (o *OutlookSyncInput) UnsetFolder() {
	o.Folder.Unset()
}

// GetFilters returns the Filters field value
func (o *OutlookSyncInput) GetFilters() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}

	return o.Filters
}

// GetFiltersOk returns a tuple with the Filters field value
// and a boolean to check if the value has been set.
func (o *OutlookSyncInput) GetFiltersOk() (map[string]interface{}, bool) {
	if o == nil {
    return map[string]interface{}{}, false
	}
	return o.Filters, true
}

// SetFilters sets field value
func (o *OutlookSyncInput) SetFilters(v map[string]interface{}) {
	o.Filters = v
}

// GetChunkSize returns the ChunkSize field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OutlookSyncInput) GetChunkSize() int32 {
	if o == nil || isNil(o.ChunkSize.Get()) {
		var ret int32
		return ret
	}
	return *o.ChunkSize.Get()
}

// GetChunkSizeOk returns a tuple with the ChunkSize field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OutlookSyncInput) GetChunkSizeOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return o.ChunkSize.Get(), o.ChunkSize.IsSet()
}

// HasChunkSize returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasChunkSize() bool {
	if o != nil && o.ChunkSize.IsSet() {
		return true
	}

	return false
}

// SetChunkSize gets a reference to the given NullableInt32 and assigns it to the ChunkSize field.
func (o *OutlookSyncInput) SetChunkSize(v int32) {
	o.ChunkSize.Set(&v)
}
// SetChunkSizeNil sets the value for ChunkSize to be an explicit nil
func (o *OutlookSyncInput) SetChunkSizeNil() {
	o.ChunkSize.Set(nil)
}

// UnsetChunkSize ensures that no value is present for ChunkSize, not even an explicit nil
func (o *OutlookSyncInput) UnsetChunkSize() {
	o.ChunkSize.Unset()
}

// GetChunkOverlap returns the ChunkOverlap field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OutlookSyncInput) GetChunkOverlap() int32 {
	if o == nil || isNil(o.ChunkOverlap.Get()) {
		var ret int32
		return ret
	}
	return *o.ChunkOverlap.Get()
}

// GetChunkOverlapOk returns a tuple with the ChunkOverlap field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OutlookSyncInput) GetChunkOverlapOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return o.ChunkOverlap.Get(), o.ChunkOverlap.IsSet()
}

// HasChunkOverlap returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasChunkOverlap() bool {
	if o != nil && o.ChunkOverlap.IsSet() {
		return true
	}

	return false
}

// SetChunkOverlap gets a reference to the given NullableInt32 and assigns it to the ChunkOverlap field.
func (o *OutlookSyncInput) SetChunkOverlap(v int32) {
	o.ChunkOverlap.Set(&v)
}
// SetChunkOverlapNil sets the value for ChunkOverlap to be an explicit nil
func (o *OutlookSyncInput) SetChunkOverlapNil() {
	o.ChunkOverlap.Set(nil)
}

// UnsetChunkOverlap ensures that no value is present for ChunkOverlap, not even an explicit nil
func (o *OutlookSyncInput) UnsetChunkOverlap() {
	o.ChunkOverlap.Unset()
}

// GetSkipEmbeddingGeneration returns the SkipEmbeddingGeneration field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OutlookSyncInput) GetSkipEmbeddingGeneration() bool {
	if o == nil || isNil(o.SkipEmbeddingGeneration.Get()) {
		var ret bool
		return ret
	}
	return *o.SkipEmbeddingGeneration.Get()
}

// GetSkipEmbeddingGenerationOk returns a tuple with the SkipEmbeddingGeneration field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OutlookSyncInput) GetSkipEmbeddingGenerationOk() (*bool, bool) {
	if o == nil {
    return nil, false
	}
	return o.SkipEmbeddingGeneration.Get(), o.SkipEmbeddingGeneration.IsSet()
}

// HasSkipEmbeddingGeneration returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasSkipEmbeddingGeneration() bool {
	if o != nil && o.SkipEmbeddingGeneration.IsSet() {
		return true
	}

	return false
}

// SetSkipEmbeddingGeneration gets a reference to the given NullableBool and assigns it to the SkipEmbeddingGeneration field.
func (o *OutlookSyncInput) SetSkipEmbeddingGeneration(v bool) {
	o.SkipEmbeddingGeneration.Set(&v)
}
// SetSkipEmbeddingGenerationNil sets the value for SkipEmbeddingGeneration to be an explicit nil
func (o *OutlookSyncInput) SetSkipEmbeddingGenerationNil() {
	o.SkipEmbeddingGeneration.Set(nil)
}

// UnsetSkipEmbeddingGeneration ensures that no value is present for SkipEmbeddingGeneration, not even an explicit nil
func (o *OutlookSyncInput) UnsetSkipEmbeddingGeneration() {
	o.SkipEmbeddingGeneration.Unset()
}

// GetEmbeddingModel returns the EmbeddingModel field value if set, zero value otherwise.
func (o *OutlookSyncInput) GetEmbeddingModel() EmbeddingGenerators {
	if o == nil || isNil(o.EmbeddingModel) {
		var ret EmbeddingGenerators
		return ret
	}
	return *o.EmbeddingModel
}

// GetEmbeddingModelOk returns a tuple with the EmbeddingModel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OutlookSyncInput) GetEmbeddingModelOk() (*EmbeddingGenerators, bool) {
	if o == nil || isNil(o.EmbeddingModel) {
    return nil, false
	}
	return o.EmbeddingModel, true
}

// HasEmbeddingModel returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasEmbeddingModel() bool {
	if o != nil && !isNil(o.EmbeddingModel) {
		return true
	}

	return false
}

// SetEmbeddingModel gets a reference to the given EmbeddingGenerators and assigns it to the EmbeddingModel field.
func (o *OutlookSyncInput) SetEmbeddingModel(v EmbeddingGenerators) {
	o.EmbeddingModel = &v
}

// GetGenerateSparseVectors returns the GenerateSparseVectors field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OutlookSyncInput) GetGenerateSparseVectors() bool {
	if o == nil || isNil(o.GenerateSparseVectors.Get()) {
		var ret bool
		return ret
	}
	return *o.GenerateSparseVectors.Get()
}

// GetGenerateSparseVectorsOk returns a tuple with the GenerateSparseVectors field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OutlookSyncInput) GetGenerateSparseVectorsOk() (*bool, bool) {
	if o == nil {
    return nil, false
	}
	return o.GenerateSparseVectors.Get(), o.GenerateSparseVectors.IsSet()
}

// HasGenerateSparseVectors returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasGenerateSparseVectors() bool {
	if o != nil && o.GenerateSparseVectors.IsSet() {
		return true
	}

	return false
}

// SetGenerateSparseVectors gets a reference to the given NullableBool and assigns it to the GenerateSparseVectors field.
func (o *OutlookSyncInput) SetGenerateSparseVectors(v bool) {
	o.GenerateSparseVectors.Set(&v)
}
// SetGenerateSparseVectorsNil sets the value for GenerateSparseVectors to be an explicit nil
func (o *OutlookSyncInput) SetGenerateSparseVectorsNil() {
	o.GenerateSparseVectors.Set(nil)
}

// UnsetGenerateSparseVectors ensures that no value is present for GenerateSparseVectors, not even an explicit nil
func (o *OutlookSyncInput) UnsetGenerateSparseVectors() {
	o.GenerateSparseVectors.Unset()
}

// GetPrependFilenameToChunks returns the PrependFilenameToChunks field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OutlookSyncInput) GetPrependFilenameToChunks() bool {
	if o == nil || isNil(o.PrependFilenameToChunks.Get()) {
		var ret bool
		return ret
	}
	return *o.PrependFilenameToChunks.Get()
}

// GetPrependFilenameToChunksOk returns a tuple with the PrependFilenameToChunks field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OutlookSyncInput) GetPrependFilenameToChunksOk() (*bool, bool) {
	if o == nil {
    return nil, false
	}
	return o.PrependFilenameToChunks.Get(), o.PrependFilenameToChunks.IsSet()
}

// HasPrependFilenameToChunks returns a boolean if a field has been set.
func (o *OutlookSyncInput) HasPrependFilenameToChunks() bool {
	if o != nil && o.PrependFilenameToChunks.IsSet() {
		return true
	}

	return false
}

// SetPrependFilenameToChunks gets a reference to the given NullableBool and assigns it to the PrependFilenameToChunks field.
func (o *OutlookSyncInput) SetPrependFilenameToChunks(v bool) {
	o.PrependFilenameToChunks.Set(&v)
}
// SetPrependFilenameToChunksNil sets the value for PrependFilenameToChunks to be an explicit nil
func (o *OutlookSyncInput) SetPrependFilenameToChunksNil() {
	o.PrependFilenameToChunks.Set(nil)
}

// UnsetPrependFilenameToChunks ensures that no value is present for PrependFilenameToChunks, not even an explicit nil
func (o *OutlookSyncInput) UnsetPrependFilenameToChunks() {
	o.PrependFilenameToChunks.Unset()
}

func (o OutlookSyncInput) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Tags != nil {
		toSerialize["tags"] = o.Tags
	}
	if o.Folder.IsSet() {
		toSerialize["folder"] = o.Folder.Get()
	}
	if true {
		toSerialize["filters"] = o.Filters
	}
	if o.ChunkSize.IsSet() {
		toSerialize["chunk_size"] = o.ChunkSize.Get()
	}
	if o.ChunkOverlap.IsSet() {
		toSerialize["chunk_overlap"] = o.ChunkOverlap.Get()
	}
	if o.SkipEmbeddingGeneration.IsSet() {
		toSerialize["skip_embedding_generation"] = o.SkipEmbeddingGeneration.Get()
	}
	if !isNil(o.EmbeddingModel) {
		toSerialize["embedding_model"] = o.EmbeddingModel
	}
	if o.GenerateSparseVectors.IsSet() {
		toSerialize["generate_sparse_vectors"] = o.GenerateSparseVectors.Get()
	}
	if o.PrependFilenameToChunks.IsSet() {
		toSerialize["prepend_filename_to_chunks"] = o.PrependFilenameToChunks.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableOutlookSyncInput struct {
	value *OutlookSyncInput
	isSet bool
}

func (v NullableOutlookSyncInput) Get() *OutlookSyncInput {
	return v.value
}

func (v *NullableOutlookSyncInput) Set(val *OutlookSyncInput) {
	v.value = val
	v.isSet = true
}

func (v NullableOutlookSyncInput) IsSet() bool {
	return v.isSet
}

func (v *NullableOutlookSyncInput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOutlookSyncInput(val *OutlookSyncInput) *NullableOutlookSyncInput {
	return &NullableOutlookSyncInput{value: val, isSet: true}
}

func (v NullableOutlookSyncInput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOutlookSyncInput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

