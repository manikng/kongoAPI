import typing_extensions

from python_pydantic_free_form_object_property.apis.tags import TagValues
from python_pydantic_free_form_object_property.apis.tags.test_api import TestApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.TEST: TestApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.TEST: TestApi,
    }
)